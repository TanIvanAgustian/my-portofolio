"use client";

import * as React from "react";

/**
 * =========================
 * Types
 * =========================
 */

export type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  open?: boolean;
};

type ToastInput = Omit<Toast, "id" | "open">;

type State = {
  toasts: Toast[];
};

type Action =
  | { type: "ADD_TOAST"; toast: Toast }
  | { type: "UPDATE_TOAST"; toast: Partial<Toast> & { id: string } }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

/**
 * =========================
 * Config
 * =========================
 */

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000;

/**
 * =========================
 * Internal store
 * =========================
 */

let count = 0;
const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

/**
 * =========================
 * Reducer
 * =========================
 */

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      const ids = toastId ? [toastId] : state.toasts.map((t) => t.id);

      ids.forEach((id) => addToRemoveQueue(id));

      return {
        toasts: state.toasts.map((t) => (!toastId || t.id === toastId ? { ...t, open: false } : t)),
      };
    }

    case "REMOVE_TOAST":
      return {
        toasts: action.toastId ? state.toasts.filter((t) => t.id !== action.toastId) : [],
      };
  }
}

/**
 * =========================
 * Dispatcher
 * =========================
 */

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((l) => l(memoryState));
}

function addToRemoveQueue(id: string) {
  if (toastTimeouts.has(id)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(id);
    dispatch({ type: "REMOVE_TOAST", toastId: id });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(id, timeout);
}

/**
 * =========================
 * Public API
 * =========================
 */

function toast(input: ToastInput) {
  const id = genId();

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...input,
      id,
      open: true,
    },
  });

  return {
    id,
    dismiss: () => dispatch({ type: "DISMISS_TOAST", toastId: id }),
    update: (data: Partial<ToastInput>) =>
      dispatch({
        type: "UPDATE_TOAST",
        toast: { ...data, id },
      }),
  };
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    toasts: state.toasts,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { toast };
