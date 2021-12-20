import { useEffect } from 'react';
import { UserService } from '@elf-example/user-service';
import { useObservable } from '@ngneat/react-rxjs';

export function App() {
  const service = new UserService();
  const [ username ] = useObservable(service.repo.username$);

  useEffect(() => {
    service.getUser().subscribe();
  }, []);

  return (
    <>
      <h1>React Username = { username }</h1>
    </>
  );
}

export default App;

