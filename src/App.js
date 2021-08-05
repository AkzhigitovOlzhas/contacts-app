import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ContactList from "./contacts/ContactList";
import Header from "./contacts/Header";
import SearchForm from "./contacts/SearchForm";
import { store } from "./store";
import ContactForm from "./contacts/ContactForm";
function App() {
  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route path="/contact-form/:id">
            <ContactForm />
          </Route>
          <Route path="/">
            <Header />
            <SearchForm />
            <ContactList />
          </Route>
        </Switch>
      </Provider>
    </>
  );
}
export default App;
