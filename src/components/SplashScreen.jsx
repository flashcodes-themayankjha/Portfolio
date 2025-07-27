import { useEffect } from "react";
import Lottie from "lottie-react";
import splashAnimation from "../assets/Lottie/term.json"; // adjust path

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    // Duration control: e.g. hide splash after 2s
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Lottie animationData={splashAnimation} speed={2}  loop={true} style={{ width: 220, height: 220 }} />
    </div>
  );
}

