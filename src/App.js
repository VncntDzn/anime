
import { Navbar, Header } from 'pages'
import { UpcomingAnimeLists, PopularAnime, AiringAnime, FavoriteAnime } from 'pages/lists'
import { Provider } from 'react-redux';
import store from 'store';
import 'normalize.css';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Header />
      <UpcomingAnimeLists />
      <PopularAnime />
      <AiringAnime />
      <FavoriteAnime />
    </Provider>
  );
}

export default App;
