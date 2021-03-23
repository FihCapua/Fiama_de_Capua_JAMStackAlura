/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(PageComponent, { pageWrapperPops }) {
  return (props) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperPops}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
