import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CityTesting() {
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    highestEducation: "",
    city: ""
  });

  useEffect(() => {
    axios
      .get("http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/city.php")
      .then((response) => {
        if (response.data.length > 0) {
          setCities(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <form>
        <div className="form-group mb-3">
          <label className="form-label">Highest Education *</label>
          <select
            className="form-select"
            name="highestEducation"
            value={formData.highestEducation}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="Ph.D.">Ph.D.</option>
            <option value="Diploma">Diploma</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label className="form-label">City *</label>
          <select
            className="form-select"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city.city_id} value={city.city_name}>
                {city.city_name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
