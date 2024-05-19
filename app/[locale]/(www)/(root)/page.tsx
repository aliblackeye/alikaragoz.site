import Home from './_partials/home';
import { WorkList } from './_partials/work-list';

export default function Index() {
  return (
    <>
      <Home workList={<WorkList />} />
    </>
  );
}
