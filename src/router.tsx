import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
const MainPage = lazy(() => import('./controller/MainPageDataController'));
const MappingDetailDataController = lazy(() =>
  import('./controller/MappingDetailDataController'),
);
const MarkdownEditorDataController = lazy(() =>
  import('./controller/MarkdownEditorDataController'),
);
const ExHentaiList = lazy(() =>
  import('./controller/ExHentaiListDataController'),
);

export default () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/mapping/:id" component={MappingDetailDataController} />
        <Route
          path="/markdown/edit/:id"
          component={MappingDetailDataController}
        />
        <Route path="/exhentai" component={ExHentaiList} />
        <Route path="/markdown/:id" component={MarkdownEditorDataController} />
      </Switch>
    </Suspense>
  </Router>
);
