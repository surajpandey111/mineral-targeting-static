import React from 'react';

function HackathonInfo() {
  return (
    <div className="hackathon-info">
      <h2>About the IndiaAI Hackathon on Mineral Targeting</h2>
      <p>
        The IndiaAI Hackathon on Mineral Targeting 2025 is a collaborative initiative between IndiaAI, an Independent Business Division (IBD) under the Digital India Corporation (DIC) of the Ministry of Electronics and IT (MeitY), and the Geological Survey of India (GSI) under the Ministry of Mines. IndiaAI, as part of the IndiaAI Mission, aims to democratize AI benefits, bolster India's global AI leadership, foster technological self-reliance, and ensure ethical AI use. The IndiaAI Application Development Initiative (IADI) promotes AI applications in critical sectors for socio-economic transformation.
      </p>
      <p>
        This hackathon partners with GSI to leverage AI and Machine Learning (ML) for mineral prognostication, using multi-parametric geoscience data (geology, geophysics, geochemistry, remote sensing, borehole data) to identify new exploration targets, especially concealed and deep-seated ore bodies. The focus is on a 39,000 sq. km area in Karnataka and Andhra Pradesh, targeting critical minerals like REE, Ni-PGE, and copper, as well as diamond, iron, manganese, and gold. Participants are encouraged to develop AI/ML algorithms for data cleaning, integration, modeling, validation, and generating predictive maps with visualizations.
      </p>
      <h3>Methodology and Development Process</h3>
      <p>
        Developed by Suraj Kumar Pandey, this project utilized the following approach:
        <ul>
          <li><strong>Data Preparation:</strong> Preprocessed National Geochemical Mapping (NGCM) data from GSI’s AIKosh platform, handling missing values and standardizing with Python’s `pandas` and `StandardScaler`.</li>
          <li><strong>Model Training:</strong> Trained Random Forest Regressor models for Copper (Cu_ppm), Iron Oxide (Fe2O3_%), and Gold (Au_ppb) predictions using scikit-learn, optimizing with hyperparameter tuning.</li>
          <li><strong>Visualization:</strong> Generated scatter plots, heatmaps, and high-potential zone maps (top 5% quantile) using Matplotlib, saved as PNG files for static display.</li>
          <li><strong>Web Integration:</strong> Initially built a Flask web app for dynamic rendering, then converted to a static React site for efficiency, embedding precomputed results and images.</li>
          <li><strong>Validation:</strong> Cross-validated models and visualized predictions to ensure accuracy, with results downloadable as CSV and report files.</li>
        </ul>
        This solution aligns with the hackathon’s goal of enhancing mineral exploration through AI-driven insights.
      </p>
    </div>
  );
}

export default HackathonInfo;