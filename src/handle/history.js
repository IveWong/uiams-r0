
import createHistory from 'history/lib/createBrowserHistory';
import useQueries from 'history/lib/useQueries';

const Location = useQueries(createHistory)();

export default Location;
