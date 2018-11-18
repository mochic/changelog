import React, { Suspense } from 'react';
import { create } from 'react-test-renderer';
import App, { Changelog } from '../App';

describe('App', () => {
  describe('initial renders', () => {
    it('initially renders loading', () => {
      // TODO mock the render time of Changelog so we can more accurately/stably test this...
      const loading = <div>loading...</div>;
      const loadingElem = create(loading);
      const root = create(
        <Suspense fallback={loadingElem}>
          <App />
        </Suspense>
      );
      // use toContainEqual when checking if an object is in array because we need to check for equality not identity
      expect(root.toJSON().children).toContainEqual(loadingElem.toJSON());
    });
    it('eventually renders App without crashing (async)', async () => {
      const loading = <div>loading...</div>;
      const loadingElem = create(loading);
      const root = create(
        <Suspense fallback={loadingElem}>
          <App />
        </Suspense>
      );

      await Changelog;

      jest.useFakeTimers();
      setTimeout(
        () =>
          expect(root.toJSON().children).not.toContainEqual(
            loadingElem.toJSON()
          ),
        1500 // maybe mock to not have to "hope" we render fast enough
      );
      jest.runAllTimers();
    });
  });
});
