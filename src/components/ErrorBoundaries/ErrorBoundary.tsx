import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: string) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // message.error("Oops! Looks like something bad happened. Try again", 2);
    console.error({ error, errorInfo });
  }

  render() {
    return this.props.children;
  }
}
