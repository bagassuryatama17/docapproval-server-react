import React from 'react';
var bgColors = {"Primary": "#1d5f8a",
};

const Hero = () => {
  return (
    <>
      <ids-layout-grid class="hero-header" cols="2" style={{backgroundColor: bgColors.Primary , padding: '0px', margin: '0px'}}>
        <ids-layout-grid-cell style={{margin: '40px', paddingLeft:'30px', paddingRight:'30%', color:'#fff'}}>
          <p class="font-size-px-28 text-strong text-white">
            Welcome Administrator,
          </p>
          <p class="label text-descriptive text-white">
            Document Approval Management Busana Apparel Group
          </p>
          <br></br>
          <p class="text-white">
            Here we provide various document approval applications that are used to process documents efficiently and regularly so as to speed up the handling of documents in Busana Apparel Group.
          </p>
          <br></br>
          <p class="font-size-px-20 text-strong text-white">
            CAPEX | MRF | Proposal | Other
          </p>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell style={{margin: '40px', paddingLeft:'50px', paddingRight:'30px', color:'#fff'}}>
          <h2 class="text-strong font-size-px-20 text-white">
            Documents Summary
          </h2>
          <p class="label text-descriptive text-white" align="left">
            All documents in this month
          </p>
          <hr />
          <ids-layout-grid>
            <ids-layout-grid-cell col-span="3">
              <h1 class="text-strong font-size-px-40 text-white">
                0
              </h1>
              <h3 class="text-strong font-size-px-14 text-white">
                Approved
              </h3>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell col-span="3" >
              <h1 class="text-strong font-size-px-40 text-white">
                0
              </h1>
              <h3 class="text-strong font-size-px-14 text-white">
                Pending
              </h3>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell col-span="3" >
              <h1 class="text-strong font-size-px-40 text-white">
                0
              </h1>
              <h3 class="text-strong font-size-px-14 text-white">
                Rejected
              </h3>
            </ids-layout-grid-cell>
            <ids-layout-grid-cell col-span="3" >
              <h1 class="text-strong font-size-px-40 text-white">
                0
              </h1>
              <h3 class="text-strong font-size-px-14 text-white">
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
