import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'

import { useRef, useState } from 'react'

import {
  Button,
  Code,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)

  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-20 tracking-wide text-8xl font-bold text-white uppercase drop-shadow-lg">Hey sayra</h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <CommentedImage src='/mithi1.jpg' text="my queen"/>
        <CommentedImage src='/mithi2.jpg' text="omg we&apos;re so cute"/>
        <CommentedImage src='/mithi3.jpg' text="goddess Aphrodite?"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">all i wanted</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-pink-50 p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-pink-50">
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>to say</h1>
          <img src='https://sweezy-cursors.com/wp-content/uploads/cursor/milk-amp-mocha-bear-love/milk-mocha-bear-love-custom-cursor.png' width={600}/>
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>is thank you for</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300 font-bold text-6xl uppercase">everything. it meant the world to me</h1>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">So...</h1>
      </div>

      <CornyQuestion 
        question="Thank you for being the nagasaki to my hiroshima"
        nonactive="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuclear_symbol.svg/1024px-Nuclear_symbol.svg.png"
        active="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76629/nuclear-explosion-clipart-xl.png"
        primary
        left
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>thank you</h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>for</h1>
      </div>

      

      <CornyQuestion 
        question="Keeping up with my shitty jokes"
        nonactive="https://assets.stickpng.com/images/61d183263a856e0004c6334a.png"
        active="https://pbs.twimg.com/media/E2ieswGVgAYKWt3.jpg"
        primary
        left
      />

      <CornyQuestion 
        question=" for pretending to eat the bananas i sent you"
        nonactive="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a76b087-d923-4acf-85c5-118e6b81c7a0/d70lfsz-0a567aaf-a3ec-4cca-ac87-3820e4727e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhNzZiMDg3LWQ5MjMtNGFjZi04NWM1LTExOGU2YjgxYzdhMFwvZDcwbGZzei0wYTU2N2FhZi1hM2VjLTRjY2EtYWM4Ny0zODIwZTQ3MjdlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PZQsxdrOyzYABwsLATW4K94fX8RQBzUIzLrR-l8BDPU"
        active="https://i.redd.it/v0ep5v1vbl331.png"
        secondary
        right
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 px-5 pt-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>I wish i became a man earlier</h1>
      </div>

      <div className="flex flex-row justify-around items-start text-center w-full h-36 bg-pink-50 pb-5">
        <RandomButton 
          text=""
          minHeight={ 4600 }
          maxHeight={ 5000 }
        />

        <button 
          className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
          onClick={ onOpen }
        >
          
        </button>

        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ cancelRef }
          onClose={ onClose } 
        >
          <AlertDialogOverlay>
            <AlertDialogContent>

              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                sayra
              </AlertDialogHeader>

              <AlertDialogBody>
                im really sorry
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button 
                  colorScheme='pink' 
                  ref={ cancelRef } 
                  onClick={
                    () => 
                    {
                      onClose();
                      setConfirmation(true);
                    }
                  }
                >
                  Confirm
                </Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>

      
    
    </>
  )
}
