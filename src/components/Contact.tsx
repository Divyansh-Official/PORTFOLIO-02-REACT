// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';
// import personalData from '../data/personal.json';

// const Contact: React.FC = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission here
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: personalData.email,
//       href: `mailto:${personalData.email}`,
//       color: 'from-cyan-500 to-blue-600'
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: personalData.phone,
//       href: `tel:${personalData.phone}`,
//       color: 'from-violet-500 to-purple-600'
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: personalData.location,
//       href: '#',
//       color: 'from-orange-500 to-red-600'
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       href: personalData.social.linkedin,
//       color: 'hover:text-blue-400'
//     },
//     {
//       icon: Github,
//       label: 'GitHub',
//       href: personalData.social.github,
//       color: 'hover:text-purple-400'
//     },
//     {
//       icon: ExternalLink,
//       label: 'Portfolio',
//       href: personalData.social.portfolio,
//       color: 'hover:text-orange-400'
//     }
//   ];

//   return (
//     <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
//           animate={{ 
//             scale: [1, 1.4, 1],
//             opacity: [0.3, 0.7, 0.3],
//             rotate: [0, 180, 360]
//           }}
//           transition={{ 
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"
//           animate={{ 
//             scale: [1.2, 1, 1.3],
//             opacity: [0.4, 0.2, 0.5],
//             rotate: [360, 180, 0]
//           }}
//           transition={{ 
//             duration: 18,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
//             GET IN <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">TOUCH</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto mb-6"></div>
//           <p className="text-xl text-slate-400 max-w-3xl mx-auto">
//             Let's collaborate on your next project. I'm always excited to work on innovative solutions.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={ref}>
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-3xl font-bold text-white mb-8"
//               >
//                 Send me a message
//               </motion.h3>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <input type="hidden" name="access_key" value="59f58b38-f5ce-484f-a15b-ff447032976a"></input>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="grid grid-cols-1 md:grid-cols-2 gap-6"
//                 >
//                   <div>
//                     <label className="block text-slate-300 text-sm font-medium mb-2">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
//                       placeholder="Your name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-slate-300 text-sm font-medium mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
//                       placeholder="your@email.com"
//                       required
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                 >
//                   <label className="block text-slate-300 text-sm font-medium mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
//                     placeholder="Project collaboration"
//                     required
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.5 }}
//                 >
//                   <label className="block text-slate-300 text-sm font-medium mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={6}
//                     className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 resize-none"
//                     placeholder="Tell me about your project..."
//                     required
//                   />
//                 </motion.div>

//                   <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>

//                 <motion.button
//                   type="submit"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.6 }}
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-violet-500/30 transition-all duration-300"
//                 >
//                   <Send size={20} />
//                   Send Message
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             {/* Contact Cards */}
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => {
//                 const IconComponent = info.icon;
//                 return (
//                   <motion.a
//                     key={info.label}
//                     href={info.href}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//                     whileHover={{ scale: 1.02, x: 5 }}
//                     className="block group"
//                   >
//                     <div className="flex items-center gap-6 p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/20">
//                       <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl shadow-lg`}>
//                         <IconComponent className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <h4 className="text-slate-300 text-sm font-medium mb-1">
//                           {info.label}
//                         </h4>
//                         <p className="text-white text-lg font-semibold group-hover:text-cyan-300 transition-colors">
//                           {info.value}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.a>
//                 );
//               })}
//             </div>

//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
//             >
//               <h4 className="text-2xl font-bold text-white mb-6">Connect with me</h4>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <motion.a
//                       key={social.label}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.1, y: -3 }}
//                       whileTap={{ scale: 0.9 }}
//                       className={`flex items-center justify-center w-14 h-14 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-400 ${social.color} transition-all duration-300 hover:border-white/30 hover:shadow-lg`}
//                     >
//                       <IconComponent size={24} />
//                     </motion.a>
//                   );
//                 })}
//               </div>
//             </motion.div>

//             {/* CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
//             >
//               <h4 className="text-2xl font-bold text-white mb-4">
//                 Ready to start a project?
//               </h4>
//               <p className="text-slate-400 mb-6">
//                 I'm available for freelance opportunities and exciting collaborations.
//               </p>
//               <motion.a
//                 href='https://drive.google.com/file/d/13XL_OBhEn71CNKz7hBBhktOlUIOAqFns/view?usp=sharing'
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 bg-gradient-to-r from-violet-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
//               >
//                 Download Resume
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';
import personalData from '../data/personal.json';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "59f58b38-f5ce-484f-a15b-ff447032976a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', subject: '', message: '' });
        (e.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone}`,
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalData.location,
      href: '#',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalData.social.linkedin,
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: personalData.social.github,
      color: 'hover:text-purple-400'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: personalData.social.portfolio,
      color: 'hover:text-orange-400'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.3],
            opacity: [0.4, 0.2, 0.5],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            GET IN <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Let's collaborate on your next project. I'm always excited to work on innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={ref}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-white mb-8"
              >
                Send me a message
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                    placeholder="Project collaboration"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-violet-500/30 transition-all duration-300"
                  disabled={result === "Sending..."}
                >
                  <Send size={20} />
                  {result === "Sending..." ? "Sending..." : "Send Message"}
                </motion.button>
              </form>

              {/* Result Message */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg text-center font-medium ${
                    result === "Form Submitted Successfully"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : result === "Sending..."
                      ? "bg-blue-500/20 border border-blue-500/30 text-blue-300"
                      : "bg-red-500/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {result}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="block group"
                  >
                    <div className="flex items-center gap-6 p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/20">
                      <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-slate-300 text-sm font-medium mb-1">
                          {info.label}
                        </h4>
                        <p className="text-white text-lg font-semibold group-hover:text-cyan-300 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h4 className="text-2xl font-bold text-white mb-6">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center justify-center w-14 h-14 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-400 ${social.color} transition-all duration-300 hover:border-white/30 hover:shadow-lg`}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
            >
              <h4 className="text-2xl font-bold text-white mb-4">
                Ready to start a project?
              </h4>
              <p className="text-slate-400 mb-6">
                I'm available for freelance opportunities and exciting collaborations.
              </p>
              <motion.a
                href='https://drive.google.com/file/d/13XL_OBhEn71CNKz7hBBhktOlUIOAqFns/view?usp=sharing'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-violet-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;