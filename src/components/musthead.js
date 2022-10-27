import React, { useRef, useEffect } from 'react';

const Musthead = () => {
  return (
    <>
        <ids-header>
          <ids-toolbar class="musthead">
            <ids-toolbar-section type="title">
              <ids-text class="musthead-appname" font-size="14" color-variant="alternate">
              Busana Apparel Group
              </ids-text>
            </ids-toolbar-section>
            <ids-toolbar-section type="buttonset" align="end">
            </ids-toolbar-section>
          </ids-toolbar>
        </ids-header>
    </>
  );
};

export default Musthead;
