import React, { useRef, useEffect } from 'react';

const List = () => {
  const listViewRef = useRef();

  useEffect(async () => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const element = listViewRef.current;

    // Do an ajax request
    const response = await fetch('assets/data/capex.json');
    const data = await response.json();

    // Set the default template
    element.defaultTemplate = [
      '<ids-text font-size="12" type="span">Capex ID: ${capexId}</ids-text>',
      '<ids-text font-size="16" type="h2">${capexName}</ids-text>',
      '<ids-text font-size="12" type="span">Requestor: ${requestor} | Submit date : ${Submit}</ids-text>'
    ].join('\n');

    // Set data
    element.data = data;
  }, []);

  return (
    <>
      
      <ids-layout-grid cols="1">
        <ids-layout-grid-cell col-span="1">
          <ids-card>
            <div slot="card-header">
              <h2 class="card-title">Capex List</h2>
            </div>
            <div slot="card-content">
              <ids-list-view
                ref={listViewRef}
              ></ids-list-view>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default List;
