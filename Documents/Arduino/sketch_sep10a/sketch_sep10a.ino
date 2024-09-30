#define pinoSensorDigital  4
#define pinoSensorAnalogico A0
#define pinoLed 3
#define piezo 4

int valorSensorDigital = 0;
int valorSensorAnalogico = 0;
int sens = 0;

void setup() {
  pinMode(pinoSensorDigital, INPUT);
  pinMode(pinoSensorAnalogico, INPUT);
  pinMode(piezo, OUTPUT);

  pinMode(pinoLed, OUTPUT);
  Serial.begin(9600);
}

void sonP () {
   
    if(sens > 70) {
		tone (piezo, 1000, 1000);
	}
  
  	if (sens > 90) {
    digitalWrite (piezo, LOW);
 		digitalWrite (pinoLed, HIGH);
      
	}
}

void loop() {
  valorSensorDigital = digitalRead(pinoSensorDigital);
  valorSensorAnalogico = analogRead(pinoSensorAnalogico);
  valorSensorAnalogico = map(valorSensorAnalogico,35,864,0,100);

  Serial.print("Valor digital:");
  Serial.println(valorSensorDigital);

  Serial.print("Valor analógico:");
  Serial.println(valorSensorAnalogico);
  sonP ();

  delay(500);
}
