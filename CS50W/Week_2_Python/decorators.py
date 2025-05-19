def announce(f):
    def wrapper():
        f()
        print("Done with the function")
    return wrapper

@announce
def hello():
    print("Hello, World!")

hello()