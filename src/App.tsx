import { useState } from "react";

import OptimizedComponent from "@components/optimized";
import UnoptimizedComponent from "@components/unoptimized";

export default function App() {
  const [isOptimized, setIsOptimized] = useState<boolean>(false);

  const handleShowComponent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsOptimized(true);
    } else {
      setIsOptimized(false);
    }
  };

  return (
    <>
      <header>
        <input
          type="checkbox"
          checked={isOptimized}
          onChange={handleShowComponent}
        />{" "}
        Optimized
      </header>
      {isOptimized ? <OptimizedComponent /> : <UnoptimizedComponent />}
    </>
  );
}
