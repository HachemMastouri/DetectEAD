import tensorflow as tf
import numpy as np

def load_model(model_path: str):
    """Loads a Keras model from the specified path."""
    return tf.keras.models.load_model(model_path)

def preprocess_input(input_list, model, fill_value=0):
    """
    Pads or truncates the input list to match the number of features required by the model.
    
    Parameters:
        input_list (list): The input features as a list of numbers.
        model (tf.keras.Model): The loaded Keras model.
        fill_value (float): The value to use for padding missing features. Default is 0.
        
    Returns:
        np.ndarray: Processed input ready for prediction.
    """
    num_features = model.input_shape[1]  # Determine expected number of features
    input_array = np.array(input_list)
    
    if len(input_array) > num_features:
        processed_input = input_array[:num_features]
    else:
        processed_input = np.pad(input_array, 
                                 (0, num_features - len(input_array)), 
                                 constant_values=fill_value)
    
    return processed_input.reshape(1, -1)  # Add batch dimension for prediction
