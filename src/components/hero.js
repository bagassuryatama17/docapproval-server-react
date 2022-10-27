import React from 'react';
var bgColors = {"Primary": "#1d5f8a",
};

const Hero = () => {
  return (
    <>
      <ids-layout-grid class="hero-header" cols="2" style={{backgroundColor: bgColors.Primary , padding: '0px', margin: '0px'}}>
        <ids-layout-grid-cell style={{margin: '40px', paddingLeft:'30px', paddingRight:'30%', color:'#fff'}}>
          <h2 class="font-size-px-28 text-strong">
            Welcome Fajrin Rama Sanjaya,
          </h2>
          <p class="label text-descriptive personalize-text">
            Document Approval Management Busana Apparel Group
          </p>
          <br></br>
          <p class="personalize-text">
            Here we provide various document approval applications that are used to process documents efficiently and regularly so as to speed up the handling of documents in Busana Apparel Group.
          </p>
          <br></br>
          <h3 class="font-size-px-20 text-strong">
            CAPEX | MRF | Proposal | Other
          </h3>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell style={{margin: '40px', paddingLeft:'50px', paddingRight:'30px', color:'#fff'}}>
          <h2>
            Documents Summary
          </h2>
          <p class="label text-descriptive personalize-text" align="left">
            All documents in this month
          </p>
          <hr />
          <ids-layout-grid>
            <ids-layout-grid-cell col-span="3">
              <h1 class="text-strong font-size-px-40">
                0
              </h1>
              <h3 class="text-strong font-size-px-14">
                Approved
              </h3>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell col-span="3" >
              <h1 class="text-strong font-size-px-40">
                0
              </h1>
              <h3 class="text-strong font-size-px-14">
                Pending
              </h3>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell col-span="3" >
              <h1 class="text-strong font-size-px-40">
                0
              </h1>
              <h3 class="text-strong font-size-px-14">
                Rejected
              </h3>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell col-span="3" >
              <h1 class="text-strong font-size-px-40">
                0
              </h1>
              <h3 class="text-strong font-size-px-14">
                Verified
              </h3>
            </ids-layout-grid-cell>
          </ids-layout-grid>
        </ids-layout-grid-cell>
      </ids-layout-grid> 
    </>
  );
};

export default Hero;
