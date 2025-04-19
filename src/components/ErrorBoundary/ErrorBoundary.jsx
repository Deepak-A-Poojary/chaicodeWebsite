import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null, failedComponentName: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Extract the component name from the first line of componentStack
    const stackLines = errorInfo?.componentStack?.trim().split("\n");
    const firstLine = stackLines?.find((line) => line.includes("at ") && line.includes("("));
    const match = firstLine?.match(/at (\w+) \(/);
    const failedComponentName = match?.[1] || "Unknown Component";

    this.setState({ errorInfo, failedComponentName });
  }

  render() {
    const { hasError, error, errorInfo, failedComponentName } = this.state;
    const { fallback, componentName } = this.props;

    const displayName = componentName || failedComponentName || "Unknown Component";

    if (hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-800 rounded w-dvw max-h-dvh">
          <h2 className="text-lg font-bold mb-2">
            Something went wrong in <span className="text-lg font-bold">{displayName}</span> component.
          </h2>

          {fallback && <div>{fallback}</div>}

          {error && (
            <details className="whitespace-pre-wrap text-sm mt-2">
              <summary className="cursor-pointer font-semibold mb-1">
                Error Details
              </summary>
              {error.toString()}
              <br />
              {errorInfo?.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
