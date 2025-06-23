import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import React from 'react';

export const App = () => (
  <div data-cy="app">
    <Header />

    <main className="section">
      <Outlet />
    </main>
  </div>
);
