import React from 'react';

//fonts
import {useFonts} from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

//routes
import Routes from './src/routes';

export default function App() {
  const [fonstLoaded] = useFonts({  
    Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold
  });

  if(!fonstLoaded){
    return null;
  }

  return (
   <Routes />
  );
}


