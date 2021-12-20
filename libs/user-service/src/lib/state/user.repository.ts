import { createState, filterNil, select, Store, withProps } from '@ngneat/elf';
import { map } from 'rxjs/operators';

interface UserProps {
  user: { id: number, name: string } | null;
}

const { state, config } = createState(
  withProps<UserProps>({
    user: null
  })
);

const store = new Store({ name: 'user', state, config });

export class UserRepository {
  user$ = store.pipe(
    select(state => state.user),
    filterNil()
  );

  username$ = this.user$.pipe(
    map(user => user.name)
  );

  updateUser(user: UserProps['user']) {
    store.update(state => ({
      ...state,
      user
    }));
  }
}
