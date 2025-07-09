#include <stdio.h>
int main(void){

    int myArray[][9] = {{2, 4, 6, 8, 10}, {1, 3, 5, 7, 9}};
    int (*ptr)[9] = myArray;
    size_t length = sizeof(myArray) / sizeof(myArray[0]);

    printf("%p\n", ptr);
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; ) {
    
        }
    }
    

    return 0;
}
