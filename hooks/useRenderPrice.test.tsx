import { renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRenderPercentage } from './useRenderPrice';
import { ArrowDown, ArrowUp } from 'components/common';

test('render percentage element', async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <ArrowUp />
      <ArrowDown />
      {children}
    </QueryClientProvider>
  );

  const { result } = renderHook(() => useRenderPercentage(), {
    wrapper,
  });

  const Element = result.current.renderPercentage('0.62');
  expect(Element).toBeTruthy();
});
