import { toast } from '@/components/app/toast';
import { QueryClient } from 'react-query';

function errorHandler(error: any): void {
  // https://chakra-ui.com/docs/components/toast#preventing-duplicate-toast
  // one message per page load, not one message per query
  // the user doesn't care that there were three failed queries on the staff page
  //    (staff, treatments, user)
  const id = 'react-query-toast';

  if (!toast.isActive(id)) {
    const title =
      error instanceof Error ? error.message : 'error connecting to the server';

    toast({ id, title, status: 'error', variant: 'subtle', isClosable: true });
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { onError: errorHandler },
  },
});
