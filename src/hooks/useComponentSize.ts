import { useCallback, useState } from 'react';

import { LayoutChangeEvent } from 'react-native';

interface ISize {
  width?: number;
  height?: number;
}

const useComponentSize = () => {
  const [size, setSize] = useState<ISize>({});

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return { size, onLayout };
};

export default useComponentSize;
