import React from "react";

// https://ko.reactjs.org/docs/error-boundaries.html#gatsby-focus-wrapper
class ErrorBoundary extends React.Component {
  state: { hasError: false } | { hasError: true; message: string };
  props: { children: React.ReactNode };
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
    this.props = props;
  }

  static getDerivedStateFromError(error: Error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true, message: error.message };
  }

  // componentDidCatch(error, errorInfo) {
  //   // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return (
        <h1 className="text-2xl w-full text-error text-center border-2 border-error rounded-lg py-10">
          {this.state.message}
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
