import MobileInterestEventRow from '../components/MobileInterestEventRow/MobileInterestEventRow';
import MobileInterestEventBig from '../components/MobileInterestEventBig/MobileInterestEventBig';

const Home = (): JSX.Element => {
  return (
    <div>
      {/*<MobileInterestEventRow*/}
      {/*  // image="nkdjf"*/}
      {/*  title='Свободная рассадка вторая строчка'*/}
      {/*  text='Московский областной театр юного зрителя'*/}
      {/*/>*/}
      <MobileInterestEventBig
        platform="E-ticket"
        price="1500"
        genre="комедия, мюзикл"
        date="2 мая, СР, 19:00"
        title="Свободная рассадка вторая строчка"
        text="Московский областной театр юного зрителя"
      />
    </div>
  );
};

export default Home;
