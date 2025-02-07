import * as React from "react";
const SingleLoop = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <polygon
      fill="var(--ci-primary-color, #ffffff)"
      points="208 312 208 344 320 344 320 312 280 312 280 176 248 176 248 200 216 200 216 232 248 232 248 312 208 312"
      className="ci-primary"
    />
    <path
      fill="var(--ci-primary-color, #ffffff)"
      d="M464,210.511V264A112.127,112.127,0,0,1,352,376H78.627l44.686-44.687-22.626-22.626L56,353.373l-4.415,4.414L18.019,391.354,92.041,474.63l23.918-21.26L75.63,408H352c79.4,0,144-64.6,144-144V178.511Z"
      className="ci-primary"
    />
    <path
      fill="var(--ci-primary-color, #ffffff)"
      d="M48,256A112.127,112.127,0,0,1,160,144H433.373l-44.686,44.687,22.626,22.626L456,166.627l4.117-4.116,33.864-33.865L419.959,45.37,396.041,66.63,436.37,112H160C80.6,112,16,176.6,16,256v85.787l32-32Z"
      className="ci-primary"
    />
  </svg>
);
export default SingleLoop;
