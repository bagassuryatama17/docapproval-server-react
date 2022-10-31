import React,{ useRef, useEffect }   from 'react';

const Donut = () => {
  const listViewRef = useRef();

  useEffect(async () => {

    const chart = listViewRef.current;

    const res = await fetch('assets/data/items-single.json');
    const data = await res.json();
    
  // Set data
  chart.data = data;
  
  }, []);
  
  return (
    <>
        <ids-layout-grid auto="true">
          <ids-pie-chart title="A pie chart showing component usage" id="index-example" suppress-tooltips="true"></ids-pie-chart>
        </ids-layout-grid>
    </>
  );
};

export default Donut;
