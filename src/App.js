import "./App.css";

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "john",
      job: "Developer",
    },
    {
      img: 34,
      name: "bob",
      job: "singer",
    },
    {
      img: 56,
      name: "lord",
      job: "artist",
    },
  ];
  return (
    <section>
      <Person person={people[0]} />;
      <Person person={people[1]}>Hi Dear All</Person>;
      <Person person={people[2]} />;
    </section>
  );
};
const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div>
      <div className="person">
        <img src={url} alt="" />
        <div>
          <h4>{name}</h4>
          <h4>{job}</h4>
          {children}
        </div>
      </div>
    </div>
  );
};
const App = () => <PersonList />;
export default App;
