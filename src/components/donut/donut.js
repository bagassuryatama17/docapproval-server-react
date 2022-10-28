import React, { useEffect, useRef } from 'react';

const Donut = () => {
    const dataDonutRef = useRef();
    // TODO: Update grid data from the state
    // const [gridData, setGridData] = useState();
  
    useEffect(() => {
      async function fetchData() {
        // Do an ajax request
        const response = await fetch('assets/data/contoh.json');
        const data = await response.json()
  
        // Set data
        dataDonutRef.current.data = data
      }
      fetchData();
    }, []);

  return (
    <>
        <ids-layout-grid auto="true">
            <ids-layout-grid-cell>
                <ids-pie-chart
                ref={dataDonutRef}
                title="A pie chart showing component usage" id="index-example" suppress-tooltips="true">
                </ids-pie-chart>
            </ids-layout-grid-cell>
        </ids-layout-grid>
    </>
  );
};

export default Donut;
