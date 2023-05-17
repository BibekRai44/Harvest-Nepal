import pickle
import streamlit as st

# Load the trained model
model = pickle.load(open('Project/RandomForest.pkl', 'rb'))

def main():
    st.title('Crop Recommendation System')

    # Input fields
    nitrogen = st.text_input('Nitrogen',placeholder='Enter nitrogen value (int)')
    phosphorus = st.text_input('Phosphorous',placeholder='Enter phosphorous value (int)')
    potassium = st.text_input('Potassium',placeholder='Enter potassium value (int)')
    temperature = st.text_input('Temperature',placeholder='Enter temperature value (float)')
    humidity = st.text_input('Humidity',placeholder='Enter humidity value (float)')
    ph = st.text_input('Ph Value',placeholder='Enter ph value (float)')
    rainfall = st.text_input('Rainfall Value',placeholder='Enter rainfall value (float)')

    if st.button('Predict'):
        # Perform crop recommendation
        input_values = [[int(nitrogen), int(phosphorus), int(potassium), float(temperature), float(humidity), float(ph), float(rainfall)]]
        make_prediction = model.predict(input_values)
        output = make_prediction[0]
        st.success('The crop you should harvest is {}'.format(output))

if __name__ == '__main__':
    main()
