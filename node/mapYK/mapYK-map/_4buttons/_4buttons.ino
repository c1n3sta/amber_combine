int pinIn     = A0;
int keyValue  =  0; // Состояние покоя

void setup() {
  pinMode(pinIn, INPUT);
  Serial.begin(9600);
}

void loop() {
  int newKeyValue = GetKeyValue(); // Получаем актуальное состояние кнопок с коррекцией дребезга

  if (keyValue != newKeyValue) {  // Если новое значение не совпадает со старым - реагируем на него
    keyValue = newKeyValue;       // Актуализируем переменную хранения состояния
    if (keyValue > 0) {           // Если значение больше 0, значит кнопка нажата
      Serial.println("Key pressed: " + String(keyValue));
    }
    else {                        // Если 0, то состояние покоя
      Serial.println("all keys are not pressed");
    }
  }
}

int GetKeyValue() {         // Функция устраняющая дребезг
  static int   oldKeyValue; // Переменная для хранения предыдущего значения состояния кнопок
  static long  lastChange;  // Переменная для хранения времени последнего изменения состояния
  int actualKeyValue = analogRead(pinIn);  // Получаем актуальное состояние

  if ((actualKeyValue != oldKeyValue) && (millis() - lastChange > 200)) { // Пришло новое значение, и с последнего изменения прошло достаточно времени
    oldKeyValue = actualKeyValue; // Запоминаем новое значение
    lastChange = millis();        // Обнуляем таймер
  }
  return    oldKeyValue;          // Отправляем старое, либо уже модифицированное новое значение

}
