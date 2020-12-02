import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, Clipboard, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import AppCSS from './AppCSS';

export default function App() {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [urlFinal, setUrlFinal] = useState('');

  const short = async () => {
    Keyboard.dismiss();
    if(url.includes('https://') || url.includes('http://')) {
      await fetch(`https://cutt.ly/api/api.php?key=4da7162703294289937bb0cda09dd109d07f1&short=${url}&name=${name}`)
      .then(async response => {
        const data = await response.json();
        if(data.url.status === 3) {
          alert('Esse nome já está em uso!');
          return;
        }
        if(data.url.status === 2) {
          alert('URL inválida!');
          return;
        }

        setUrlFinal(data.url.shortLink);
      })
      
      return;
    }
    alert('URL inválida!')
  }

  function copyUrl() {
    Clipboard.setString(urlFinal);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={AppCSS.container}>
        <StatusBar style="auto" />

        <Text style={AppCSS.title}>
          <Image style={AppCSS.titleLogo} source={require('./assets/CutLinkLogo.png')}/>
          Cut
          <Text style={{color: '#4682b4'}}>Link</Text>
        </Text>

        <Text style={{color: 'gray', marginBottom: 20, marginTop: 2}}>Galactus Company™</Text>

        <TextInput
          style={AppCSS.urlInput}
          onChangeText={(text) => setUrl(text)}
          value={url}
          placeholder='Digite ou cole a URL...'
        />

        <TextInput
          style={AppCSS.urlInput}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder='Nome personalizado'
        />

        <TouchableOpacity style={AppCSS.shortBtn} onPress={() => short()}>
          <Text style={{color: '#FFF', fontSize: 20}}>Encurtar</Text>
        </TouchableOpacity>

      <TouchableWithoutFeedback>
        <View style={AppCSS.copy}>
          <Text style={AppCSS.finalUrl}>{urlFinal}</Text>
          <MaterialIcons name="content-copy" size={20} color="#4682b4" onPress={urlFinal ? copyUrl() : () => {}}/>
        </View>
      </TouchableWithoutFeedback>

      </View>
    </TouchableWithoutFeedback>
  );
}