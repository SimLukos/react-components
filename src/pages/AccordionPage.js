import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'adas',
      label: 'Can i use React on a project?',
      content:
        'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.',
    },
    {
      id: 'adaaDVFs',
      label: 'Can i use JavaScript on a project?',
      content: 'You must.',
    },
    {
      id: 'adKMLMEEas',
      label: 'Can i use CSS on a project?',
      content: 'You should if you want good design.',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
