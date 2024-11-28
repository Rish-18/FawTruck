import React from 'react'

function Map() {
  return (
    <div>
       <div className="my-12 px-[50px] h-[300px] rounded-lg">
        {/* Map Embed */}
        <div className="w-full h-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2067616549925!2d72.84606282373979!3d19.18616954850764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6fd2a2f20b9%3A0x4f3d2c5473f5809c!2sMalad%20Foot%20Over%20Brg%2C%20Malad%2C%20Vijaykar%20Wadi%20Industrial%2C%20Vijaykar%20Wadi%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064!5e0!3m2!1sen!2sin!4v1732534750501!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Map;
