import React from 'react';
import Button from '../components/Button';
import {
  GoBellFill,
  GoPencil,
  GoDatabase,
  GoCalendar,
  GoCreditCard,
} from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <div>
      <div>
        <Button
          className={'mb-5'}
          secondary
          outline
          rounded
          onClick={handleClick}
        >
          <GoBellFill />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCreditCard />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoPencil />
          See Deal!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoCalendar />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoDatabase />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
