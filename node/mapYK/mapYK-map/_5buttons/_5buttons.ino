/*
  ReadAnalogVoltage
  Reads an analog input on pin 0, converts it to voltage, and prints the result to the serial monitor.
  Graphical representation is available using serial plotter (Tools > Serial Plotter menu)
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.
*/

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue0 = analogRead(B2);
  int sensorValue1 = analogRead(B3);
  int sensorValue2 = analogRead(A3);
  //int sensorValue3 = analogRead(2);
  //int sensorValue4 = analogRead(3);
  // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
  float voltage0 = sensorValue0 * (5.0 / 1023.0);
  float voltage1 = sensorValue1 * (5.0 / 1023.0);
  float voltage2 = sensorValue2 * (5.0 / 1023.0);
  //float voltage3 = sensorValue3 * (5.0 / 1023.0);
  //float voltage4 = sensorValue4 * (5.0 / 1023.0);
  // print out the value you read:
  Serial.print(voltage0);Serial.print(' ');
  Serial.print(voltage1);Serial.print(' ');
  Serial.print(voltage2);Serial.print(' ');
 // Serial.print(voltage3);Serial.print(' ');
  //Serial.print(voltage4);Serial.print(' ');
  Serial.println(' ');
  delay(100);
  
}