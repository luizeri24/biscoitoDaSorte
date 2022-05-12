import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [img, setImage] = useState(require('./src/biscoito.png'));
  const [textCookie, setTextCookie] = useState('');

  const wordsCookie = [
    'A persistência é o caminho do êxito.',
    'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
    'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
    'No meio da dificuldade encontra-se a oportunidade.',
    'É parte da cura o desejo de ser curado.',
    'O que me preocupa não é o grito dos maus. É o silêncio dos bons.',
    'Imagine uma nova história para sua vida e acredite nela.',
  ];

  const crashCookie = () => {
    const cookieAleatory = Math.floor(Math.random() * wordsCookie.length);
    setTextCookie(`"${wordsCookie[cookieAleatory]}"`);
    setImage(require('./src/biscoitoAberto.png'));
  };
  const refreshCookie = () => {
    setImage(require('./src/biscoito.png'));
    setTextCookie('');
  };
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text style={styles.textCookie}>{textCookie}</Text>
      <TouchableOpacity style={styles.buttonCookie} onPress={crashCookie}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonCookie, {marginTop: 15, borderColor: '#121212'}]}
        onPress={refreshCookie}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, {color: '#121212'}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textCookie: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttonCookie: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
