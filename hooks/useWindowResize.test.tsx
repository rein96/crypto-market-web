import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useWindowResize from './useWindowResize';

test('width and height of useWindowResize', async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result } = renderHook(() => useWindowResize(), {
    wrapper,
  });

  await waitFor(() => expect(result.current.width).toBeTruthy());
  await waitFor(() => expect(result.current.height).toBeTruthy());
});
