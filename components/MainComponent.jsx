import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

const MainComponent = () => {

  const pastLives = [
    { id: 1, title: "Картограф затерянных континентов", description: "Рисовал карты мест, которые так и не вошли в современную географию." },
    { id: 2, title: "Укротитель комет", description: "Управлял небесными телами в древнем космосе, чтобы они не врезались в Землю." },
    { id: 3, title: "Создатель первых легенд", description: "Вдохновлял древние племена на мифы и сказания." },
    { id: 4, title: "Гонец богов", description: "Переносил послания между мирами, балансируя между божественным и человеческим." },
    { id: 5, title: "Дрессировщик песчаных бурь", description: "Управлял стихией в пустынях, создавая безопасные оазисы для кочевников." },
    { id: 6, title: "Архитектор лунных городов", description: "Строил древние города на Луне, когда она ещё была обитаема." },
    { id: 7, title: "Собиратель теней", description: "Охранял покой людей, возвращая их заблудшие тени." },
    { id: 8, title: "Хранитель звёздного света", description: "Собрал первые светлячки для того, чтобы ночи стали менее тёмными." },
    { id: 9, title: "Музыкант эфира", description: "Играл на невидимых инструментах, создавая музыку, которую слышали только ветра." },
    { id: 10, title: "Кодировщик природы", description: "Вписывал законы жизни в кольца деревьев и узоры на крыльях бабочек." },
    { id: 11, title: "Страж нерождённых идей", description: "Защищал гениальные мысли, пока они не воплотились в реальность." },
    { id: 12, title: "Алхимик звуков", description: "Превращал шум океана или шелест травы в мелодии, которые успокаивали мир." },
    { id: 13, title: "Шёпот лесов", description: "Был душой леса, успокаивающей тех, кто потерялся среди деревьев." },
    { id: 14, title: "Искатель магических ключей", description: "Открывал порталы между мирами для потерянных душ." },
    { id: 15, title: "Проводник метеоритных дождей", description: "Расставлял звёзды, чтобы они падали в нужное место в нужное время." },
    { id: 16, title: "Сказочный часовщик", description: "Создавал часы, которые показывали не время, а самое важное событие жизни." },
    { id: 17, title: "Хранитель светлячков", description: "Берёг крошечные огоньки, которые освещали тропинки странникам." },
    { id: 18, title: "Танцор закатов", description: "Своими движениями создавал идеальные краски вечернего неба." },
    { id: 19, title: "Мастер зеркал миров", description: "Создавал порталы в альтернативные реальности." },
    { id: 20, title: "Летописец дождя", description: "Записывал каждую каплю, чтобы она не пропала в истории Земли." }
  ];

const [num, setNum] = useState(0);
const randomNum = Math.floor(Math.random()*20)
const randomLife = pastLives[num].title
const randomDescription = pastLives[num].description
console.log(randomLife)

  return (
    // <View style={styles.mainContainer}>
      <ImageBackground
      source={require('../assets/images/background.jpg')} // Указываем путь к изображению
      style={styles.mainContainer}
      resizeMode="stretch"
    >
      <Text style={styles.title}>Оракул</Text>
      <View style={styles.container}>
        <View style={styles.pastLife}>
          <Text style={styles.pastLife__header}>Кем ты был в прошлой жизни:</Text>
          <Text style={styles.pastLife__title}>{randomLife}</Text>
        </View>
        <View style={styles.pastLife}>
          <Text style={styles.pastLife__header}>Ты:</Text>
          <Text style={styles.pastLife__title}>{randomDescription}</Text>
        </View>
        <Button title="Узнать!" onPress={() => setNum(Math.floor(Math.random()*20))} />
      </View>
      </ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    width: "100%",
    height: '100vh',
    paddingTop: "10vh",
  },
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
    width: 300,
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pastLife: {
    height: 150,
    borderRadius: 30,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    padding: 10,
  },
  pastLife__header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
    color: 'black',
    marginTop: '20px'
  },
  pastLife__title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
    color: 'rgba(37, 37, 37, 1)',
  },

});

export default MainComponent;