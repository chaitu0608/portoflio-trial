import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Radio, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate transmission delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required for transmission');
      setIsSubmitting(false);
      return;
    }

    // Simulate successful transmission
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
      setError('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl mac-window traffic-light border-cyan-400/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-cyan-400 font-mono">
            <Radio className="w-5 h-5" />
            Transmission Console
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Transmission Status */}
          <div className="flex items-center gap-3 p-4 glass-panel border border-cyan-400/20 rounded-lg">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-sm">UPLINK_ESTABLISHED</span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent"></div>
            <span className="text-muted-foreground font-mono text-xs">
              {new Date().toLocaleTimeString()}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-cyan-400 font-mono text-sm">
                    TRANSMITTER_ID
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="terminal bg-black/50 border-cyan-400/30 text-foreground placeholder:text-muted-foreground"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cyan-400 font-mono text-sm">
                    COMMUNICATION_FREQUENCY
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@domain.com"
                    className="terminal bg-black/50 border-cyan-400/30 text-foreground placeholder:text-muted-foreground"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cyan-400 font-mono text-sm">
                    MESSAGE_PAYLOAD
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message..."
                    rows={6}
                    className="terminal bg-black/50 border-cyan-400/30 text-foreground placeholder:text-muted-foreground resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 font-mono text-sm">{error}</span>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="flex-1 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 cosmic-cyber hover:scale-105 transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 mr-2"
                        >
                          <Radio className="w-4 h-4" />
                        </motion.div>
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Transmission
                      </>
                    )}
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </motion.div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gradient font-space">
                    Transmission Sent! 📡
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been successfully transmitted through the cosmic network.
                  </p>
                </div>

                <div className="glass-panel border border-green-400/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>MESSAGE_DELIVERED</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-green-400/30 to-transparent"></div>
                    <span>STATUS: SUCCESS</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  I'll get back to you as soon as I receive your transmission!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
