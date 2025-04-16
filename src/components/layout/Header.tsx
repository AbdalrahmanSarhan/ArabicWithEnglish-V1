import React from 'react';
import { Navbar } from '../Navbar';
interface HeaderProps {
  children?: React.ReactNode;
}
export const Header = ({
  children
}: HeaderProps) => {
  return <header>
      <Navbar />
      {children}
    </header>;
};