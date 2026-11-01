tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        merek: {
                            magenta: '#E11D74',
                            'merah-muda': '#F43F5E',
                            koral: '#FA4D56',
                            jingga: '#FF7844',
                            gelap: '#18181B',
                            arang: '#27272A',
                            redup: '#71717A',
                            terang: '#FAFAFA'
                        }
                    },
                    backgroundImage: {
                        'gradien-merek': 'linear-gradient(135deg, #E11D74 0%, #FA4D56 50%, #FF7844 100%)',
                        'gradien-merek-arah': 'linear-gradient(135deg, #C2185B 0%, #E11D74 50%, #F97316 100%)',
                        'gradien-kaca': 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.65))',
                    },
                    boxShadow: {
                        'cahaya-merek': '0 10px 25px -5px rgba(225, 29, 116, 0.3)',
                        'cahaya-merek-besar': '0 20px 35px -10px rgba(225, 29, 116, 0.35)',
                        'bayangan-kartu-lembut': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                    }
                }
            }
        }




