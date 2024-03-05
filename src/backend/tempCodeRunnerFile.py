model, decoder, utils = torch.hub.load(repo_or_dir='snakers4/silero-models',
                                    model='silero_stt',
                                    language='en',  # also available 'de', 'es'
                                    device=torch.device('cpu'))