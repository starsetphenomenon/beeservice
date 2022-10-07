import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeadMenu from './components/HeadMenu/HeadMenu';
import Home from './pages/Home/Home';
import Computer from './pages/Services/Computer/Computer';
import Phone from './pages/Services/Phone/Phone';
import Printer from './pages/Services/Printer/Printer';
import HouseApp from './pages/Services/HouseApp/HouseApp';
import Tv from './pages/Services/TV/Tv';
import Audio from './pages/Services/Audio/Audio';
import Footer from './components/Footer/Footer';



export default function App() {

  const [computer, setComputer] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [phone, setPhone] = useState([]);
  const [tablet, setTablet] = useState([]);
  const [book, setBook] = useState([]);
  const [navi, setNavi] = useState([]);
  const [audio, setAudio] = useState([]);
  const [screen, setScreen] = useState([]);
  const [homeequip, setHomeequips] = useState([]);
  const [printer, setPrinters] = useState([]);
  const [cartridge, setCartridge] = useState([]);

  useEffect(() => {
    fetch('db/comp-laptop/computers.json')
    .then(res => res.json())
    .then(result => setComputer(result));
  }, []);

  useEffect(() => {
    fetch('db/comp-laptop/laptops.json')
    .then(res => res.json())
    .then(result => setLaptop(result));
  }, []);

  useEffect(() => {
    fetch('db/phone-tablet/phones.json')
    .then(res => res.json())
    .then(result => setPhone(result));
  }, []);

  useEffect(() => {
    fetch('db/phone-tablet/tablets.json')
    .then(res => res.json())
    .then(result => setTablet(result));
  }, []);

  useEffect(() => {
    fetch('db/phone-tablet/books.json')
    .then(res => res.json())
    .then(result => setBook(result));
  }, []);

  useEffect(() => {
    fetch('db/phone-tablet/navigators.json')
    .then(res => res.json())
    .then(result => setNavi(result));
  }, []);

  useEffect(() => {
    fetch('db/audio/audiosystems.json')
    .then(res => res.json())
    .then(result => setAudio(result));
  }, []);

  // useEffect(() => {
  //   fetch('db/screens.json')
  //   .then(res => res.json())
  //   .then(result => setScreen(result));
  // }, []);

  useEffect(() => {
    fetch('db/printer/printers.json')
    .then(res => res.json())
    .then(result => setPrinters(result));
  }, []);

  useEffect(() => {
    fetch('db/printer/cartridges.json')
    .then(res => res.json())
    .then(result => setCartridge(result));
  }, []);

  // useEffect(() => {
  //   fetch('db/homeequips.json')
  //   .then(res => res.json())
  //   .then(result => setHomeequips(result));
  // }, []);

  // useEffect(() => {
  // console.log(document.title);
  // });


  return (
      <div className='App'>
        <Header />
        <HeadMenu />
        <Routes>
          <Route path='/' element={
            <Home />
          } />
          <Route path='/computer-laptop' element={
            <Computer computer={computer} laptop={laptop} pageName={`Ремонт комп'ютерів та ноутбуків`} />
          } />
          <Route path='/phone-tablet' element={
            <Phone phone={phone} book={book} tablet={tablet} navi={navi} pageName={`Ремонт телефонів, планшетів, навігаторів`} />
          } />
          <Route path='/office-equipment' element={
            <Printer printer={printer} cartridge={cartridge} pageName={`Ремонт принтерів та офісної техніки`} />
          } />
          <Route path='/home-equipment' element={
            <HouseApp homeequip={homeequip} pageName={`Ремонт малої побутової техніки`} />
          } />
          <Route path='/tv-screen' element={
            <Tv screen={screen} pageName={`Ремонт телевізорів та моніторів`} />
          } />
          <Route path='/audio-system' element={
            <Audio audio={audio} pageName={`Ремонт аудіосистем`} />
          } />
        </Routes>
        <Footer />
      </div>

  );
}

